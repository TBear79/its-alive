import Vue from 'vue'
import Vuex from 'vuex'
import WebServiceData from '../data/web-services'
import uuidv4 from 'uuid/v4'
import axios from 'axios'
import config from './assets/static-config'

Vue.use(Vuex)

const validateWebServiceData = () => {
    // for (let webService of WebServiceData) {
    //     // TODO: Check for unique name
    //     for (let endpoint of webService.endpoints) {
    //         // TODO: Check for unique endpoint url
    //     }
    // }
}

const getMappedWebServiceData = (context) => {
    let data = [...WebServiceData]

    for (let webService of data) {
        webService.id = uuidv4()

        webService.endpoints = webService.endpoints.filter(x => !x.ignore)

        for (let endpoint of webService.endpoints) {
            endpoint.id = uuidv4()
            endpoint.status = 'INIT'
            endpoint.reason = null
        }
    }

    return data
}

const sendRequest = (context, endpoint) => {
    axios.get(endpoint.url, { headers: endpoint.headers })
        .then(function (response) {
            if (response.status === 200) {
                context.commit('setStatus', { endpointId: endpoint.id, status: 'SUCCESS' })
                return
            }
            context.commit('setStatus', { endpointId: endpoint.id, status: 'FAIL', reason: response.body })
        })
        .catch(function (error) {
            context.commit('setStatus', { endpointId: endpoint.id, status: 'FAIL', reason: error.message })
        })
}

const sendAllRequests = (context) => {
    const endpoints = context.state.webServices.reduce((acc, cur) => { return acc.concat(cur.endpoints) }, [])
    for (let endpoint of endpoints) {
        sendRequest(context, endpoint)
    }
}

const startListening = (context) => {
    sendAllRequests(context)

    setInterval(() => { sendAllRequests(context) }, 10000)
}

const store = new Vuex.Store({
    state: {
        text: {},
        webServices: []
    },
    mutations: {
        setWebServices: (state, webServices) => {
            state.webServices = webServices
        },
        setStatus (state, payload) {
            let endpoint = state.webServices.reduce((acc, cur) => { return acc.concat(cur.endpoints) }, []).find(x => x.id === payload.endpointId)
            endpoint.status = payload.status
            endpoint.reason = payload.reason
        },
        addTexts (state, payload) {
            state.text = { ...state.text, ...payload }
        }
    },
    actions: {
        initApp (context) {
            validateWebServiceData()
            const webservices = getMappedWebServiceData()
            context.commit('setWebServices', webservices)
            context.commit('addTexts', config.texts)
            startListening(context)
        }
    }
})

export default store

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pat from '@/components/pat/Pat'
import Topic from '@/components/topic/Topic'
import Message from '@/components/message/Message'
import Profile from '@/components/profile/Profile'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        { 
            path: '/pat',
            name: 'Pat',
            component: Pat
        },
        {
            path: '/topic',
            name: 'Topic',
            component: Topic
        }, {
            path: '/message',
            name: 'Message',
            component: Message
        }, {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ]
})

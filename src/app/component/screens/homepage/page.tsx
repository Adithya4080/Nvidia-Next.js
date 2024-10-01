import React from 'react'
import Spotlight from '../spotlight/page'
import Model from '../models/page'
import Integrations from '../integrations/page'
import Run from '../run/page'
import Case from '../cases/page'
import Resource from '../resources/page'
import Docs from '../docs/page'

export default function Homepage() {
    return (
        <>
            <Spotlight/>
            <Model/>
            <Integrations />
            <Run/>
            <Case />
            <Resource />
            <Docs />
        </>
    )
}

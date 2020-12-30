import StatusProfileClass from "./StatusProfile";
import React from "react";
import {create} from 'react-test-renderer';

describe("StatusProfile component", () => {
    test("status from props should be in the state", () => {
        const component = create(<StatusProfileClass statusProfile={"Value from test"}/>)
        const instance = component.getInstance();
        expect(instance.state.statusText).toBe("Value from test");
    })
})
import React from 'react';
import {shallow, mount} from 'enzyme';

import DreadPirate from './App';
//import {FIND_GRUB, RESTART_APP, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, LOGIN_SUCCESS} from '../actions'

import reducer from '../reducer'

describe('<DreadPirate />', () => {

    it('render without crashing', () => {
        shallow(<DreadPirate />);
    })
}

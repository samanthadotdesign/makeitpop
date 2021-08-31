import { withStyles } from '@material-ui/styles'; import styled from 'styled-components';
import { Slider } from '@material-ui/core';

export const Container = styled.div`
  max-width: 380px;
`;

export const TempoSlider = withStyles({
  root: {
    color: '#000',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    color: '#000',
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

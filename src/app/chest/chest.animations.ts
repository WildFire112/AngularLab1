import { 
  trigger,
  state,
  style
} from '@angular/animations';

export default [
  trigger('openClose', [
    state('opened_top', style({
      transform: 'rotateX(140deg) translateY(125px) scaleY(1.75) scaleX(0.95)'
    })),
    state('closed_top', style({
      transform: 'rotateX(0deg) translateY(0) scaleY(1) scaleX(1)'
    })),
    state('opened_lingots', style({
      opacity: '1',
      transform: 'scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.68, 0, 0.265, 1.55) 0.5s',
    })),
    state('closed_lingots', style({
      opacity: '0',
      transform: 'scale(0)',
      transition: 'transform 0.2s 0.2s, opacity 0.1s 0.1s'
    })),
    state('opened_s', style({
      boxShadow: 'none',
      transition: 'all 0.5s'
    })),
    state('closed_wood', style({
      boxShadow: '0 23px #864e1b',
      transition: 'all 0.5s 0.4s'
    })),
    state('closed_panel', style({
      boxShadow: '0 17px #ffbc00',
      transition: 'all 0.5s 0.4s'
    })),
    state('closed_wood', style({
      boxShadow: '0 23px #864e1b',
      transition: 'all 0.5s 0.4s'
    })),
    state('closed_lock', style({
      boxShadow: '0 17px #864e1b',
      transition: 'all 0.5s 0.4s'
    }))
  ])
]
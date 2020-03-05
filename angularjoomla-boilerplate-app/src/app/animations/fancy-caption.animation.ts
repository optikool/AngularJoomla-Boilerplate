import { trigger, transition, query, animate, style, state, group, animateChild } from '@angular/animations';

export const fancyCaptionLoadTrigger = trigger('fancyCaptionLoadState', [
    transition('inactive => active', [
        group([
            query('@fancyCaptionTopLoadState', animateChild()),
            query('@fancyCaptionBottomLoadState', animateChild())
        ])
    ]),
    transition('active => inactive', [
        group([
            query('@fancyCaptionBottomLoadState', animateChild()),
            query('@fancyCaptionTopLoadState', animateChild())
        ])
    ])
]);

export const fancyCaptionTopLoadTrigger = trigger('fancyCaptionTopLoadState', [
    state('active', style({
        bottom: '0'
    })),
    state('inactive', style({
        bottom: '200px'
    })),
    transition('inactive => active', [
        style({
            bottom: '200px'
        }),
        animate('300ms ease-out', style({
            bottom: '0'
        }))
    ]),
    transition('active => inactive', [
        style({
            bottom: '0'
        }),
        animate('200ms ease-out', style({
            bottom: '200px'
        }))
    ])
]);

export const fancyCaptionBottomLoadTrigger = trigger('fancyCaptionBottomLoadState', [
    state('active', style({
        top: '0'
    })),
    state('inactive', style({
        top: '200px'
    })),
    transition('inactive => active', [
        style({
            top: '200px'
        }),
        animate('300ms ease-out', style({
            top: '0'
        }))
    ]),
    transition('active => inactive', [
        style({
            top: '0'
        }),
        animate('200ms ease-out', style({
            top: '200px'
        }))
    ])
]);

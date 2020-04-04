let levelData = {
    levels: [
        {
            beginningText: 'YOU DON\'T KNOW WHAT\nYOU\'RE GETTING INTO.',
            data: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            key: {
                0: { id: 'AIR' },
                1: { id: 'WALL' },
                2: { id: 'CHECKPOINT' },
                3: { id: 'GOAL' },
                4: {
                    id: 'PATH', path: [
                        { x: 16, y: 8 },
                        { x: 7, y: 8 }
                    ],
                    speed: 4
                },
                5: {
                    id: 'PATH', path: [
                        { x: 7, y: 7 },
                        { x: 16, y: 7 }
                    ],
                    speed: 4
                },
                6: {
                    id: 'PATH', path: [
                        { x: 16, y: 6 },
                        { x: 7, y: 6 }
                    ],
                    speed: 4
                },
                7: {
                    id: 'PATH', path: [
                        { x: 7, y: 5 },
                        { x: 16, y: 5 }
                    ],
                    speed: 4
                }
            },
            playerPosition: { x: 4.5, y: 6.5 }
        },
        {
            beginningText: 'DON\'T EVEN BOTHER TRYING.',
            data: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 4, 0, 6, 0, 8, 0,10, 0,12, 0,14, 0, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 0, 5, 0, 7, 0, 9, 0,11, 0,13, 0,15, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            key: {
                0: { id: 'AIR' },
                1: { id: 'WALL' },
                2: { id: 'CHECKPOINT' },
                3: { id: 'GOAL' },
                4: {
                    id: 'PATH', path: [
                        { x: 6, y: 9 },
                        { x: 6, y: 4 }
                    ],
                    speed: 3
                },
                5: {
                    id: 'PATH', path: [
                        { x: 7, y: 4 },
                        { x: 7, y: 9 }
                    ],
                    speed: 3
                },
                6: {
                    id: 'PATH', path: [
                        { x: 8, y: 9 },
                        { x: 8, y: 4 }
                    ],
                    speed: 3
                },
                7: {
                    id: 'PATH', path: [
                        { x: 9, y: 4 },
                        { x: 9, y: 9 }
                    ],
                    speed: 3
                },
                8: {
                    id: 'PATH', path: [
                        { x: 10, y: 9 },
                        { x: 10, y: 4 }
                    ],
                    speed: 3
                },
                9: {
                    id: 'PATH', path: [
                        { x: 11, y: 4 },
                        { x: 11, y: 9 }
                    ],
                    speed: 3
                },
                10: {
                    id: 'PATH', path: [
                        { x: 12, y: 9 },
                        { x: 12, y: 4 }
                    ],
                    speed: 3
                },
                11: {
                    id: 'PATH', path: [
                        { x: 13, y: 4 },
                        { x: 13, y: 9 }
                    ],
                    speed: 3
                },
                12: {
                    id: 'PATH', path: [
                        { x: 14, y: 9 },
                        { x: 14, y: 4 }
                    ],
                    speed: 3
                },
                13: {
                    id: 'PATH', path: [
                        { x: 15, y: 4 },
                        { x: 15, y: 9 }
                    ],
                    speed: 3
                },
                14: {
                    id: 'PATH', path: [
                        { x: 16, y: 9 },
                        { x: 16, y: 4 }
                    ],
                    speed: 3
                },
                15: {
                    id: 'PATH', path: [
                        { x: 17, y: 4 },
                        { x: 17, y: 9 }
                    ],
                    speed: 3
                },
                16: {id: 'COIN', orientation: 1}
            },
            playerPosition: { x: 4.5, y: 6.5 }
        },
        {
            beginningText: 'I CAN ALMOST\nGUARANTEE YOU WILL\nFAIL.',
            data: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            key: {
                0: { id: 'AIR' },
                1: { id: 'WALL' },
                2: { id: 'GOAL' },
                3: { id: 'COIN', orientation: 0 },
                4: { id: 'PATH', path: [
                    { x: 13, y: 5 },
                    { x: 13, y: 8 },
                    { x: 10, y: 8 },
                    { x: 10, y: 5 }
                ], speed: 2
                },
                5: {
                    id: 'PATH', path: [
                        { x: 13, y: 8 },
                        { x: 10, y: 8 },
                        { x: 10, y: 5 },
                        { x: 13, y: 5 }
                    ], speed: 2
                },
                6: {
                    id: 'PATH', path: [
                        { x: 10, y: 8 },
                        { x: 10, y: 5 },
                        { x: 13, y: 5 },
                        { x: 13, y: 8 }
                    ], speed: 2
                },
                7: {
                    id: 'PATH', path: [
                        { x: 10, y: 5 },
                        { x: 13, y: 5 },
                        { x: 13, y: 8 },
                        { x: 10, y: 8 }
                    ], speed: 2
                }
            },
            playerPosition: { x: 11.5, y: 6.5 }
        }
    ]
}
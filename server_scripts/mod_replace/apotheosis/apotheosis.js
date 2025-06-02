ServerEvents.recipes(event => {
    event.shaped('apotheosis:boss_summoner', [
        `aba`,
        `bcb`,
        `aba`
    ], {
        a: `apotheosis:rare_material`,
        b: `apotheosis:epic_material`,
        c: `minecraft:egg`
    }).id('apotheosis:boss_summoner')
})

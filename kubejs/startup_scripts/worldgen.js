WorldgenEvents.remove(event => {
    event.removeOres(remove => {
        remove.blocks = [
            '#forge:ores'
        ]
    })
})
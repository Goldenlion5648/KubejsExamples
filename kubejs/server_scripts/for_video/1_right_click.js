ItemEvents.rightClicked(event => {
    if(event.item.id == "minecraft:iron_nugget") {
        let newCow = event.player.block.createEntity("minecraft:cow")
        newCow.spawn()
        event.item.shrink(1)
    }
})
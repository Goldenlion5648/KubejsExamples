BlockEvents.rightClicked(event => {
    if(event.block.id != "minecraft:sweet_berry_bush" ||
        event.block.getProperties().age == 3) {
        return
    }
    if(event.item.id == "minecraft:diamond" ) {
        event.block.set("aether:berry_bush_stem")
        event.item.shrink(1)
    }
})
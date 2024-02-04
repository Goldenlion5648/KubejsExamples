ItemEvents.entityInteracted(event => {
    if(event.item.id != "minecraft:gold_ingot") {
        // stop here, we don't want to do anything
        // if they are not holding the item that
        // does the action
        return
    }

    let entityName = event.getTarget().entityType
    event.server.tell(entityName)
    if(entityName == "entity.minecraft.cow") {
        event.server.tell("cow was clicked")
        let AetherCow = event.target.block.createEntity("aether:flying_cow")
        AetherCow.spawn()
        event.target.teleportTo(0, -1000, 0)
    }
})
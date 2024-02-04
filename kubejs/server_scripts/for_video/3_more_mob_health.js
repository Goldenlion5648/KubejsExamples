EntityEvents.checkSpawn(event => {
    var entity = event.getEntity()
    let entityBiomeId = entity.block.biomeId.toString()
    var hardBiomes = ["minecraft:taiga"]
    // event.server.tell(entityBiomeId)
    if(entity.isMonster() && hardBiomes.includes(entityBiomeId)) {
        entity.setMaxHealth(entity.getMaxHealth() * 3)
        entity.setHealth(entity.maxHealth)
    }
})
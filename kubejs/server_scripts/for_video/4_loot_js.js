LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:dirt")
        .removeLoot(Ingredient.all)
        .dropExperience(1)
        .addWeightedLoot([
            Item.of('minecraft:gravel').withChance(20),
            Item.of('minecraft:sand').withChance(10)
        ])
})
%{
	"title": "Pronouns",
	"description": "How to manage your pronouns in Terminal Land"
}%

# Pronouns

We’re not really concerned with gender in Terminal Land; we’re far more concerend with making sure that you’re called what you want to be called, both by the game’s parser and and by other players. Everyone deserves to be included and respected, and we’ve designed the game to uphold that value.

Terminal Land recognizes five unique pronoun forms, and you can set each of them individually.

| Pronoun | Property | Info | Example |
|  :--- |  :--- |  :--- |  :--- |
| Subjective | `subjective pronoun` | The subject of the sentence. | **She** went to the park.
| Objective | `objective pronoun` | The object of the sentence. | I went with **her**.
| Adjectival | `adjectival pronoun` | Used as an adjective (describing another noun) | She brought **her** frisbee.
| Possessive | `possessive pronoun` | Stands alone to indicate posession. | At least I think it was **hers**.
| Reflexive | `reflexive pronoun` | Used when the subject and object of a sentence are the same. | She threw the frisbee to **herself**.

(Examples taken from [Pronoun Island](https://pronoun.is), which is a wonderful resource.)

## Setting your pronouns

You can use the `SET` verb to set these pronouns individually, like this:

```
> SET my subjective_pronoun TO they
```

You can also set all five pronouns at once, like this:

```
> SET my pronouns TO they/them/their/theirs/themselves
```

Or, for common pronouns, you can just specify the first two and the parser will figure it out from there:

```
> SET my pronouns TO they/them
```

## How pronouns are used

The parser will try to use your pronouns in all appropriate contexts wherever possible. For example, if someone `LOOK`s at you:

```
> LOOK at Grue

Grue is hungry and can’t wait for the sun to set.

They are carrying a shaker of salt, a steak knife, and a candle.
```

If Grue’s pronouns weren’t set, that second line would use Grue’s name in lieu of their pronoun:

```
Grue is carrying a shaker of salt, a steak knife, and a candle.
```

If you don’t specify any pronouns, the parser will make the best choice between displaying your name or using default they/them pronouns (based on context).

## Checking other player’s pronouns

You can view anyone’s pronouns on their [Compendium](https://terminal.land/compendium/) profile page.

# The Basics

Here’s your crash course in Terminal Land. Follow along here and you’ll be up to speed in no time!

## Interface

Terminal Lannd’s interface is really simple. There’s a chunk of text, which tells you what’s going on. And then there’s a prompt, which looks like this:

```
>
```

You type simple commands into the prompt to do things, and then the game tells you what happens. Easy! The rest of this page will tell you the kinds of commands that you can type at the prompt.

There are a couple of other interface bits worth mentioning:

1. In the upper-left corner of the screen, you’ll see the name of your current location.
2. In the upper-right corner, you’ll see your name and a status dot. Green means that you’re connected and everything is OK, yellow means that you’ve lost your connection and the client is trying to reconnect, and red means you’re disconnected.

## Orienting yourself

After you register, or whenever you log in, the game runs the `LOOK` command for you automatically. `LOOK`ing around is a really useful thing to do, because it helps you understand where you are, where you can go, and what’s around you. (You can just type `L` as a shortcut to look.)

## Communicate

You might see people talking to each other. You can talk too! Just use the `SAY` command, like this:

```
> SAY hello!
```

And everyone around you will see you say “hello!” There’s a shortcut for this, which is to put a single quote in front of what you want to say (you don’t even have to close the quote), like this:

```
> "hello!
```

## Gear up

When you `LOOK`, be sure to take note of any interesting items that you can see. See something you like? Try to `TAKE` it, and perhaps it’ll become yours. (You can use `GET` in place of `TAKE` if you prefer something shorter.)

## Take stock

After you’ve taken something, you can check your `INVENTORY` to see what you’re carrying. (You can shorten that to `INV` or even just `I` if you’d like.)

## Look a little closer

In addition to using `LOOK` to look around you, you can also `LOOK` at things. Try looking at yourself, or another player, or something that’s in your inventory. When you `LOOK` at a person or item, you’ll see their description. (You can also `EXAMINE` things, but since that’s more to type than `LOOK`, you can abbreviate it to `X`.)

## Customize yourself

You can `SET` all kinds of properties for yourself, but there are a couple that you might want to do sooner than later.

### Your description

Your description is what people will see when they `LOOK` at you. Make yours all about you! You can set it with the `SET` command, like this:

```
> SET my description TO Long flowing brown hair frames a soft, kind face.
```

And when people look at you, they’ll see:

```
> Long flowing brown hair frames a soft, kind face.
```

### Your pronouns

Your pronouns will be used in different ways within the game. You don’t _have_ to set them, but it’s a great way to have other people (and the game itself) refer to you correctly. You can set all five pronoun forms individually (we have [a whole page about pronouns](pronouns) that goes into detail on this), but you can take a shortcut and set them more easily with this syntax:

```
> SET my pronouns TO she/her
```

And then when people `LOOK` at you, they’ll see:

```
Long flowing brown hair frames a soft, kind face.

She is carrying a backpack, a battered notebook, and a pair of hypersonic pliers.
```

## Go out and about

Moving around in Terminal Land is fairly easy. You can `GO` in almost any cardinal direction. Usually when you `LOOK` around, the place’s description will give you some clues as to where you can `GO`. Like this:

```
> LOOK

You’re standing at the end of a narrow hallway. There’s a closed door ahead to the north, and open doorways to the east and west. The exit back to the ballroom is behind you to the south.
```

With this information, you know you can `GO NORTH`, or `GO SOUTH`, or even east or west. (You can also omit the `GO` verb and just type a caridinal direction; the truly lazy can just type the abbreviation of the direction like `N`, `S`, `E`, or `W`.)

----

## Ready to begin your adventure?

There’s plenty more to cover, but if you’ve read this far you’re well on your way to self-sufficiency in the world of Terminal Land!

# Grammy Calendar Menu

> This grammY plugin ports [telegraf-calendar-telegram](https://github.com/gianlucaparadise/telegraf-calendar-telegram) to the grammY framework.

## Usage

```ts
import { Calendar, type CalendarContext, type CalendarOptions } from "grammy-calendar";
import { Bot } from "grammy";

type MyContext = Context & CalendarContext;
type SessionData = {
  calendarOptions: CalendarOptions;
}

const bot = new Bot<MyContext>("BOT-TOKEN");
bot.use(session({
  initial: () => ({ 
    calendarOptions: {} 
  })
}));
const calendarMenu = new Calendar<MyContext>(
  (ctx) => ctx.session.calendarOptions
);
bot.use(calendarMenu);

bot.on("message:text", async (ctx) => {
  ctx.session.calendarOptions = { defaultDate: new Date() };
  await ctx.reply("This is a calendar", { reply_markup: calendarMenu })
})
bot.filter((ctx) => !!ctx.calendarSelectedDate, async (ctx) => {
  const dateText = ctx.calendarSelectedDate!.toString()
  await ctx.reply(`You have selected this date: ${dateText}`)
})

```

"use client";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  const [calendarSingleValue, setCalendarSingleValue] = useState<
    Date | undefined
  >(new Date("Sun Oct 06 2024 00:00:00 GMT-0500 (Central Daylight Time)"));
  const [calendarMultipleValue, setCalendarMultipleValue] = useState<
    Date[] | undefined
  >([
    new Date("Sun Oct 06 2024 00:00:00 GMT-0500 (Central Daylight Time)"),
    new Date("Sat Oct 19 2024 00:00:00 GMT-0500 (Central Daylight Time)"),
  ]);
  const [calendarRangeValue, setCalendarRangeValue] = useState<
    DateRange | undefined
  >({
    from: new Date("Sun Oct 06 2024 00:00:00 GMT-0500 (Central Daylight Time)"),
    to: new Date("Sat Oct 19 2024 00:00:00 GMT-0500 (Central Daylight Time)"),
  });

  useEffect(() => {
    console.log({
      calendarSingleValue,
      calendarMultipleValue,
      calendarRangeValue,
    });
  }, [calendarSingleValue, calendarMultipleValue, calendarRangeValue]);

  return (
    <div className="w-screen h-screen flex p-16">
      <div className="flex flex-wrap gap-4">
        {/* BUTTONS */}
        <Card className="w-96 h-min flex gap-4 p-4">
          <div className="w-full h-full flex flex-col gap-4">
            Buttons
            <Button variant={"link"}>link</Button>
            <Button variant={"default"}>default</Button>
            <Button variant={"destructive"}>destructive</Button>
            <Button variant={"outline"}>outline</Button>
            <Button variant={"secondary"}>secondary</Button>
            <Button variant={"ghost"}>ghost</Button>
          </div>
          <div className="w-full h-full flex flex-col gap-4">
            Buttons (Hover State)
            <Button className="underline" variant={"link"}>
              link
            </Button>
            <Button className="bg-primary/70" variant={"default"}>
              default
            </Button>
            <Button className="bg-destructive/70" variant={"destructive"}>
              destructive
            </Button>
            <Button
              className="bg-accent text-accent-foreground"
              variant={"outline"}
            >
              outline
            </Button>
            <Button className="bg-secondary/70" variant={"secondary"}>
              secondary
            </Button>
            <Button
              className="bg-accent text-accent-foreground"
              variant={"ghost"}
            >
              ghost
            </Button>
          </div>
        </Card>
        {/* INPUT */}
        <Card className="w-52 h-52 flex flex-col gap-4 p-4">
          Input
          <Input
            placeholder="Normal"
            className="transition-shadow duration-300 ease-out"
          />
          <Input
            placeholder="Active"
            className="transition-shadow duration-300 ease-out ring-1 ring-ring"
          />
        </Card>
        {/* CARD */}
        <Card className="w-52 h-52">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted">Muted Example</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        {/* Select */}
        <Card className="w-52 h-52 p-4">
          Select
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </Card>
        {/* Textarea */}
        <Card className="w-96 h-52 flex flex-col gap-4 p-4">
          Textarea
          <Textarea defaultValue={"Normal"} />
          <Textarea className="ring-1 ring-ring" defaultValue={"Active"} />
        </Card>
        {/* Calendar */}
        <Card className="w-min h-min flex flex-col gap-4 p-4">
          Calendar
          <div className="w-full h-min flex gap-4">
            <div className="w-full h-min flex flex-col gap-4">
              Single Select
              <Calendar
                mode="single"
                selected={calendarSingleValue}
                onSelect={(val) => setCalendarSingleValue(val)}
                initialFocus
              />
            </div>
            <div className="w-full h-min flex flex-col gap-4">
              Multi Select
              <Calendar
                mode="multiple"
                selected={calendarMultipleValue}
                onSelect={(val) => setCalendarMultipleValue(val)}
                initialFocus
              />
            </div>
            <div className="w-full h-min flex flex-col gap-4">
              Range Select
              <Calendar
                mode="range"
                selected={calendarRangeValue}
                onSelect={(val) => setCalendarRangeValue(val)}
                initialFocus
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

<h1 class="text-red-500">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
    import CalendarIcon from "lucide-svelte/icons/calendar";
    import {
      DateFormatter,
      type DateValue,
      getLocalTimeZone
    } from "@internationalized/date";
    import { cn } from "$lib/utils.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Calendar } from "$lib/components/ui/calendar/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Toaster, toast } from 'svelte-sonner';
   
    const df = new DateFormatter("en-US", {
      dateStyle: "long"
    });
   
    let value: DateValue | undefined = undefined;

    import type { PageData } from "./$types.js";
  import SettingsForm from "./settings/settings-form.svelte";
  export let data: PageData;
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
 
  import { toggleMode } from "mode-watcher";
  import { Switch } from "$lib/components/ui/switch";
  import { Label } from "$lib/components/ui/label";
  </script>
   



  <Popover.Root>
    <Popover.Trigger asChild let:builder>
      <Button
        variant="outline"
        class={cn(
          "w-[280px] justify-start text-left font-normal",
          !value && "text-muted-foreground"
        )}
        builders={[builder]}
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0">
      <Calendar bind:value initialFocus />
    </Popover.Content>
  </Popover.Root>
   
   <br>
   <br>

  <Button>Click me</Button>

  <br>
<br>



<Toaster />
<Button on:click={() => toast.success("Hello world")}>Show toast</Button>


<br>
<br>

<div class="flex items-center space-x-2">
  <Button on:click={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>

 </div>
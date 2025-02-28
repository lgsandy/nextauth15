"use client";
import CustomCard from "@/components/shared/custom-card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/shared/multi-select";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(8),
});
const frameworks = [
  { id: "next.js", text: "Next.js" },
  { id: "sveltekit", text: "SvelteKit" },
  { id: "nuxt.js", text: "Nuxt.js" },
  { id: "remix", text: "Remix" },
  { id: "astro", text: "Astro" },
];
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [selectedFrameworks, setSelectedFrameworks] = useState<
    { id: string; text: string }[]
  >([]);
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center gap-2 px-2 py-2 h-screen">
      <Button>Test</Button>
      <div className="w-1/6">
        <CustomCard title="Login ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CustomCard>
      </div>
      <div className="py-5 flex justify-center">
        <MultipleSelector
          options={frameworks}
          selectedValues={selectedFrameworks.map((item) => item.id)}
          onChange={(selected) =>
            setSelectedFrameworks(selected as typeof frameworks)
          }
          returnObjects={true}
          valueKey="id"
          labelKey="text"
          placeholder="Select frameworks..."
        />
        {JSON.stringify(selectedFrameworks)}
      </div>
    </div>
  );
}

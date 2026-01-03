import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-restaurant";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import type { InsertMessage } from "@shared/schema";

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background flex flex-col items-center px-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For reservations of parties larger than 6, private events, or general inquiries, please send us a message.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 shadow-xl shadow-black/5 border border-border"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                id="name"
                {...form.register("name")}
                className="w-full bg-background border-b border-border py-3 px-1 text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Jane Doe"
              />
              {form.formState.errors.name && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full bg-background border-b border-border py-3 px-1 text-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="jane@example.com"
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                id="message"
                rows={5}
                {...form.register("message")}
                className="w-full bg-background border-b border-border py-3 px-1 text-lg focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help you?"
              />
              {form.formState.errors.message && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

import { createClient } from "@supabase/supabase-js";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Initialize Supabase client (use anon key for client-side)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Initialize Mailchimp client (avoid exposing full API key client-side; use a proxy or server route instead)
mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, // Insecure; see note below
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
});

export const subscribeToNewsletter = async (email) => {
  if (!email) throw new Error("Email is required");

  try {
    console.log([{ subscriber: email }]);
    // Store in Supabase
    const { error: supabaseError } = await supabase
      .from("Subscribers")
      .insert([{ subscriber: email }]);
    if (supabaseError)
      throw new Error(`Supabase error: ${supabaseError.message}`);

    // Send to Mailchimp
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed", // Use 'pending' for double opt-in
      }
    );

    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    if (error.response?.body?.title === "Member Exists") {
      throw new Error("This email is already subscribed.");
    }
    throw new Error(error.message || "Something went wrong");
  }
};

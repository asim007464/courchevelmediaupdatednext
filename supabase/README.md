# Supabase admin setup

1. Create a project at https://supabase.com
2. Copy Project URL + anon key + service role key into `.env.local` (see `.env.local.example`)
3. In Supabase → SQL Editor, run `supabase/schema.sql`
4. Create the admin login user:

```bash
node scripts/create-admin.mjs
```

Default credentials (change after first login if needed):

- Email: `asimsajjad928@gmail.com`
- Password: `Asim$464`

5. Restart `npm run dev`
6. Open `/login`

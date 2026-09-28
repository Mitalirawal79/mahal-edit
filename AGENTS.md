<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the storefront's illustrative catalog in `src/lib/catalog.ts` and browser-only demo bag in `src/lib/bag.tsx`, because this concept has no connected commerce backend.
- Keep global storefront chrome in `src/components/storefront.tsx` mounted by the root route, so every shopping page shares one navigation and bag.

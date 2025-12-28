export function cn(
  base: string,
  mods?: Record<string, boolean | undefined>
): string | undefined {
  const classes: string[] = [];
  if (base) classes.push(base);

  if (mods) {
    for (const [key, enabled] of Object.entries(mods)) {
      if (enabled) classes.push(key);
    }
  }

  return classes.length > 0 ? classes.join(' ') : undefined;
}

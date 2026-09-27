import { execFileSync } from 'node:child_process';

/**
 * Date of the last commit that touched `path`, read at build time so "Last updated" is never set by hand.
 * Falls back to the build date for uncommitted files or when git history is unavailable.
 */
export function lastModified(path: string): Date {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', path], { encoding: 'utf8' }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

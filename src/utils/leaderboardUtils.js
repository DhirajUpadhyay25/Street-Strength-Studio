/**
 * Street Strength Studio — Leaderboard Utilities
 *
 * Pure calculation functions for automatic ranking, score sorting,
 * rank movement determination, and metrics formatting.
 */

/**
 * Automatically calculates rankings and movements for a given challenge.
 *
 * @param {Object} challenge - Challenge data object
 * @returns {Array} List of participants with calculatedRank, movement, and formattedScore
 */
export function calculateRankings(challenge) {
  if (!challenge || !Array.isArray(challenge.participants)) {
    return [];
  }

  // Clone participants array before sorting to avoid mutating original source
  const sorted = [...challenge.participants].sort((a, b) => {
    if (challenge.scoring === 'lower-is-better') {
      return a.score - b.score;
    }
    // Default: higher-is-better
    return b.score - a.score;
  });

  return sorted.map((p, index) => {
    const currentRank = index + 1;
    let movement = { type: 'same', label: '—', diff: 0 };

    if (p.previousRank === null || p.previousRank === undefined) {
      movement = { type: 'new', label: 'NEW', diff: null };
    } else if (p.previousRank > currentRank) {
      const diff = p.previousRank - currentRank;
      movement = { type: 'up', label: `↑ ${diff}`, diff };
    } else if (p.previousRank < currentRank) {
      const diff = currentRank - p.previousRank;
      movement = { type: 'down', label: `↓ ${diff}`, diff };
    } else {
      movement = { type: 'same', label: '—', diff: 0 };
    }

    return {
      ...p,
      calculatedRank: currentRank,
      movement,
      formattedScore: formatScore(p.score, challenge.unit, challenge.id),
    };
  });
}

/**
 * Format score with appropriate unit representation
 */
export function formatScore(score, unit, challengeId = '') {
  if (score === null || score === undefined) return '—';

  // For time-based plank holds or long durations in seconds
  if (challengeId.includes('plank') || (unit === 's' && score >= 60)) {
    const mins = Math.floor(score / 60);
    const secs = Math.floor(score % 60);
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  }

  if (unit === 's') {
    return `${typeof score === 'number' ? score.toFixed(2) : score}s`;
  }

  if (unit === 'reps') {
    return `${score} reps`;
  }

  if (unit === 'kg') {
    return `+${score} kg`;
  }

  return `${score} ${unit}`;
}

/**
 * Calculate studio-wide competition statistics
 */
export function getLeaderboardStats(challenges = []) {
  const athleteNames = new Set();
  let totalParticipantsCount = 0;

  challenges.forEach((ch) => {
    if (Array.isArray(ch.participants)) {
      ch.participants.forEach((p) => {
        athleteNames.add(p.name.trim().toLowerCase());
        totalParticipantsCount += 1;
      });
    }
  });

  // Determine top featured challenge and current leader
  const featured = getFeaturedChallenge(challenges);
  const featuredRanked = featured ? calculateRankings(featured) : [];
  const currentLeader = featuredRanked[0]?.name || 'Rahul Sharma';
  const bestScore = featuredRanked[0] ? `${featuredRanked[0].formattedScore} (${featured.name})` : '11.84s';

  return {
    totalAthletes: athleteNames.size,
    totalEntries: totalParticipantsCount,
    activeChallenges: challenges.length,
    currentLeader,
    bestScore,
  };
}

/**
 * Get featured challenge or fallback to first challenge
 */
export function getFeaturedChallenge(challenges = []) {
  return challenges.find((c) => c.featured) || challenges[0] || null;
}

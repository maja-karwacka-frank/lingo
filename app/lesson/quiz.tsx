'use client';

import { challengeOptions, challenges } from '@/db/schema';
import { useState } from 'react';
import { Header } from './header';

type Props = {
	initialPercentage: number;
	initialHearts: number;
	initialLessonId: number;
	initialLessonChallenges: (typeof challenges.$inferSelect & {
		completed: boolean;
		challengeOptions: (typeof challengeOptions.$inferSelect)[];
	})[];
	userSubscription: any; // TODO: Define userSubscription type;
};

export const Quiz = ({
	initialHearts,
	initialLessonChallenges,
	initialLessonId,
	initialPercentage,
	userSubscription,
}: Props) => {
	const [hearts, setHearts] = useState(initialHearts);
	const [percentage, setPercentage] = useState(initialPercentage);

	return (
		<>
			<Header
				hearts={hearts}
				percentage={percentage}
				hasActiveSubscription={!!userSubscription?.isActive}
			/>
		</>
	);
};

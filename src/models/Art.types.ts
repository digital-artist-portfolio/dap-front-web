export interface IArt {
	id: number;
	attributes: {
		name: string;
		description: {
			type: string;
			children: { type: string; text: string }[];
		}[];
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
		alt: string;
		image: {
			data: {
				id: number;
				attributes: {
					width: number;
					height: number;
					url: string;
					formats: {
						thumbnail: {
							width: number;
							height: number;
							url: string;
						};
						large: {
							width: number;
							height: number;
							url: string;
						};
						small: {
							width: number;
							height: number;
							url: string;
						};
						medium: {
							width: number;
							height: number;
							url: string;
						};
					};
				};
			};
		};
	};
}

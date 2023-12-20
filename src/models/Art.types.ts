export interface IArt {
	id: number;
	attributes: {
		Name: string;
		Description: {
			type: string;
			children: { type: string; text: string }[];
		}[];
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
		Alt: string;
		Image: {
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
		next?: {
			data: {
				id: number;
			} | null;
		};
		previous?: {
			data: {
				id: number;
			} | null;
		};
	};
}

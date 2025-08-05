import type { Alcohol, Taste, Proof } from "./schemas";

export type 주종선택 = { 
	alcohol?: Alcohol;
	// experience?: Experience;
	proof?: Proof;
	taste?: Taste;
	memo?: string;
};

// export type 경험선택 = { 
// 	alcohol: Alcohol; 
// 	experience?: Experience; 
// 	proof?: Proof; 
// 	taste?: Taste; 
// 	memo?: string; 
// };

export type 도수선택 = { 
	alcohol: Alcohol; 
	// experience: Experience; 
	proofS?: Proof; 
	taste?: Taste; 
	memo?: string; 
};

export type 맛선택 = { 
	alcohol: Alcohol; 
	// experience: Experience; 
	proof: Proof; 
	taste?: Taste; 
	memo?: string; 
};

export type 메모입력 = { 
	alcohol: Alcohol; 
	// experience: Experience; 
	proof: Proof; 
	taste: Taste; 
	memo?: string; 
};
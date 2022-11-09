// Moved from main/main.jsx to data/data.jsx

// Static dataa
const MainContent = {
	title: "Main component title",
	paragraph: "Main title | eltit niaM",
	blogPost: [
		// An array inside an object
		{ title: "BlogPost1", smallDescription: "Lalallalalla Blogpost1" },

		{ title: "BlogPost2", smallDescription: "Lalallalalla Blogpost2" },

		{ title: "BlogPost3", smallDescription: "Lalallalalla Blogpost3" },
	],
};

// const SubPageContent = {
// 	title: "Main component title",
// 	paragraph: "Main title | eltit niaM",
// 	blogPost: [
// 		// An array inside an object(?)
// 		{ title: "BlogPost", smallDescription: "Lallalaalalalla" },

// 		{ title: "BlogPost", smallDescription: "Lallalaalalalla" },

// 		{ title: "BlogPost", smallDescription: "Lallalaalalalla" },
// 	],
// };

// Only one export default, but multiple export
export default MainContent;
// export { MainContent, SubPageContent };

//  CHOOSE: single or multiple object export.

// Either direct export in the const, or export multiple, don't use them both in one. Using multiple have more overview to see what is exported and what is not.
// export const SubSubPageContent = {
// 	title: "Main component title",
// 	paragraph: "Main title | eltit niaM",
// 	blogPost: [
// 		// An array inside an object(?)
// 		{ title: "BlogPost", smallDescription: "Lallalaalalallablogpost1" },

// 		{ title: "BlogPost", smallDescription: "Lallalaalalallablogpost2" },

// 		{ title: "BlogPost", smallDescription: "Lallalaalalallablogpost3" },
// 	],
// };

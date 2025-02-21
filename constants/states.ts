import ROUTES from "./routes";

export const DEFAULT_EMPTY = {
  title: "No Data Found",
  message:
    "Looks like the databse is taking a nap. Wake it up with new entries.",
  button: {
    text: "Add Data",
    href: ROUTES.HOME,
  },
};

export const DEFAULT_ERROR = {
  title: "Oops! Something went wrong.",
  message: "Even our code can have a bad day. Give it another shot.",
  button: {
    text: "Try Again",
    href: ROUTES.HOME,
  },
};

export const EMPTY_QUESTION = {
  title: "Aah, No questions yet!",
  message: "Looks like there are no questions yet. Be the first to ask.",
  button: {
    text: "Ask a Question",
    href: ROUTES.ASK_QUESTION,
  },
};

export const EMPTY_TAGS = {
  title: "No Tags Found",
  message: "The tag cloud is empty. Add some keywords to make it rain.",
  button: {
    text: "Create Tag",
    href: ROUTES.TAGS,
  },
};

export const EMPTY_ANSWERS = {
  title: "No Answers Found",
  message: "The Answer board is empty. Be the first to answer.",
  // button: {
  //   text: "Answer",
  //   href: ROUTES.HOME,
  // },
};

export const EMPTY_COLLECTIONS = {
  title: "Collections Are Empty",
  message:
    "Looks like you haven’t created any collections yet. Start curating something extraordinary today",
  button: {
    text: "Save to Collection",
    href: ROUTES.COLLECTION,
  },
};

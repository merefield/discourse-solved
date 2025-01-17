import Category from "discourse/models/category";
import { computed, get } from "@ember/object";

export default {
  name: "extend-category-for-solved",

  before: "inject-discourse-objects",

  initialize() {
    Category.reopen({
      enable_accepted_answers: computed(
        "custom_fields.enable_accepted_answers",
        {
          get(fieldName) {
            return get(this.custom_fields, fieldName) === "true";
          },
        }
      ),
    });
  },
};

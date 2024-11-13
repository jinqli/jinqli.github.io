import {
  commonjsGlobal
} from "./chunk-GZL7PI2Y.js";

// node_modules/tdesign-vue-next/es/_chunks/dep-c5ef79f2.mjs
var en$1 = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    true ? module.exports = n() : false ? (void 0)(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_en = n();
  }(commonjsGlobal, function() {
    "use strict";
    return {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function ordinal(e) {
        var n = ["th", "st", "nd", "rd"], t = e % 100;
        return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
      }
    };
  });
})(en$1, en$1.exports);
var en = en$1.exports;

// node_modules/tdesign-vue-next/es/_common/js/global-config/locale/en_US.mjs
var enUs = {
  pagination: {
    itemsPerPage: "{size} / page",
    jumpTo: "Jump to",
    page: "",
    total: "{total} items"
  },
  cascader: {
    empty: "Empty Data",
    loadingText: "loading...",
    placeholder: "please select"
  },
  calendar: {
    yearSelection: "{year}",
    monthSelection: "{month}",
    yearRadio: "year",
    monthRadio: "month",
    hideWeekend: "Hide Week",
    showWeekend: "Show Week",
    today: "Today",
    thisMonth: "This Month",
    week: "Monday,Tuesday,Wedsday,Thuresday,Friday,Saturday,Sunday",
    cellMonth: "January,February,March,April,May,June,July,August,September,October,November,December"
  },
  transfer: {
    title: "{checked} / {total}",
    empty: "Empty Data",
    placeholder: "enter keyword to search"
  },
  timePicker: {
    dayjsLocale: "en",
    now: "Now",
    confirm: "Confirm",
    anteMeridiem: "AM",
    postMeridiem: "PM",
    placeholder: "please select"
  },
  dialog: {
    confirm: "Confirm",
    cancel: "Cancel"
  },
  drawer: {
    confirm: "Confirm",
    cancel: "Cancel"
  },
  popconfirm: {
    confirm: {
      content: "OK"
    },
    cancel: {
      content: "Cancel"
    }
  },
  table: {
    empty: "Empty Data",
    loadingText: "loading...",
    loadingMoreText: "loading more",
    filterInputPlaceholder: "",
    sortAscendingOperationText: "click to sort ascending",
    sortCancelOperationText: "click to cancel sorting",
    sortDescendingOperationText: "click to sort descending",
    clearFilterResultButtonText: "Clear",
    columnConfigButtonText: "Column Config",
    columnConfigTitleText: "Table Column Config",
    columnConfigDescriptionText: "Please select columns to show them in the table",
    confirmText: "Confirm",
    cancelText: "Cancel",
    resetText: "Reset",
    selectAllText: "Select All",
    searchResultText: 'Search "{result}". Find {count} items.'
  },
  select: {
    empty: "Empty Data",
    loadingText: "loading...",
    placeholder: "please select"
  },
  tree: {
    empty: "Empty Data"
  },
  treeSelect: {
    empty: "Empty Data",
    loadingText: "loading...",
    placeholder: "please select"
  },
  datePicker: {
    dayjsLocale: "en",
    placeholder: {
      date: "select date",
      month: "select month",
      year: "select year",
      quarter: "select quarter",
      week: "select week"
    },
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    quarters: ["Q1", "Q2", "Q3", "Q4"],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "D",
    yearAriaLabel: "Y",
    monthAriaLabel: "M",
    weekAbbreviation: "W",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    nextYear: "Next Year",
    preYear: "Last Year",
    nextMonth: "Next Month",
    preMonth: "Last Month",
    preDecade: "Last Decade",
    nextDecade: "Next Decade",
    now: "Now"
  },
  upload: {
    sizeLimitMessage: "File is too large to upload. {sizeLimit}",
    cancelUploadText: "Cancel",
    triggerUploadText: {
      fileInput: "Upload",
      image: "Click to upload",
      normal: "Upload",
      reupload: "ReUpload",
      continueUpload: "Continue Upload",
      "delete": "Delete",
      uploading: "Uploading"
    },
    dragger: {
      dragDropText: "Drop here",
      draggingText: "Drag file to this area to upload",
      clickAndDragText: 'Click "Upload" or Drag file to this area to upload'
    },
    file: {
      fileNameText: "filename",
      fileSizeText: "size",
      fileStatusText: "status",
      fileOperationText: "operation",
      fileOperationDateText: "date"
    },
    progress: {
      uploadingText: "Uploading",
      waitingText: "Waiting",
      failText: "Failed",
      successText: "Success"
    }
  },
  form: {
    errorMessage: {
      date: "${name} is invalid",
      url: "${name} is invalid",
      required: "${name} is required",
      whitespace: "${name} cannot be empty",
      max: "${name} must be at least ${validate} characters",
      min: "${name} cannot be longer than ${validate} characters",
      len: "${name} must be exactly ${validate} characters",
      "enum": "${name} must be one of ${validate}",
      idcard: "${name} is invalid",
      telnumber: "${name} is invalid",
      pattern: "${name} is invalid",
      validator: "${name} is invalid",
      "boolean": "${name} is not a boolean",
      number: "${name} must be a number"
    },
    colonText: ":"
  },
  input: {
    placeholder: "please enter"
  },
  list: {
    loadingText: "loading...",
    loadingMoreText: "loading more"
  },
  alert: {
    expandText: "expand",
    collapseText: "collapse"
  },
  anchor: {
    copySuccessText: "copy the link successfully",
    copyText: "copy link"
  },
  colorPicker: {
    swatchColorTitle: "System Default",
    recentColorTitle: "Recently Used",
    clearConfirmText: "Clear recently used colors?"
  },
  guide: {
    finishButtonProps: {
      content: "Finish",
      theme: "primary"
    },
    nextButtonProps: {
      content: "Next Step",
      theme: "primary"
    },
    skipButtonProps: {
      content: "Skip",
      theme: "default"
    },
    prevButtonProps: {
      content: "Last Step",
      theme: "default"
    }
  },
  image: {
    errorText: "unable to load",
    loadingText: "loading"
  },
  imageViewer: {
    errorText: "unable to load",
    mirrorTipText: "mirror",
    rotateTipText: "rotate",
    originalSizeTipText: "original"
  },
  typography: {
    expandText: "more",
    collapseText: "collapse",
    copiedText: "copied"
  },
  rate: {
    rateText: ["terrible", "disappointed", "normal", "satisfied", "surprised"]
  },
  empty: {
    titleText: {
      maintenance: "Under Construction",
      success: "Success",
      fail: "Failure",
      empty: "No Data",
      networkError: "Network Error"
    }
  },
  descriptions: {
    colonText: ":"
  }
};
export {
  enUs as default
};
/*! Bundled license information:

tdesign-vue-next/es/_chunks/dep-c5ef79f2.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/_common/js/global-config/locale/en_US.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)

tdesign-vue-next/es/locale/en_US.mjs:
  (**
   * tdesign v1.10.3
   * (c) 2024 tdesign
   * @license MIT
   *)
*/
//# sourceMappingURL=tdesign-vue-next_es_locale_en_US.js.map
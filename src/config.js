const DEFAULT_STATE = "state:desarrollo";
export default {
  URL: "https://api.clubhouse.io/api/v3",
  CLUBHOUSE_API_TOKEN: "5e4d8619-18b2-438e-aedb-f69f5e617cd2",
  QUERIES: [
    `label:importante label:urgente !label:"no importante" !label:"no urgente" ${DEFAULT_STATE}`,
    `label:"no urgente" label:"importante" !label:"no importante" ${DEFAULT_STATE}`,
    `label:"no importante" label:"urgente" !label:"no urgente" ${DEFAULT_STATE}`,
    `label:"no urgente" label:"no importante" ${DEFAULT_STATE}`
  ]
};

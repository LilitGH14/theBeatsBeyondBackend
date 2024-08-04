import db from "../db.js";

export const query = (sql, res, selectFirst, callback) => {
  db.execute(sql, (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      const _data = selectFirst ? (data[0] ? data[0] : null) : data;

      if (callback) {
        return res.json({ ResponseData: callback(_data), ResponseCode: 200 });
      }

      return res.json({ ResponseData: _data, ResponseCode: 200 });
    }
  });
};

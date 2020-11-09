import { DataTypes } from "sequelize";

import { sequelize } from "../modules/db";

export const Device = sequelize.define(
  "Device",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export const DeviceData = sequelize.define(
  "DeviceData",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deviceData: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

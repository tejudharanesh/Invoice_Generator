import React from "react";
import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import rupee from "../rupee.png";
// Replace with the actual path to your font file

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    fontSize: 18,
    textAlign: "left",
    width: 150,
    backgroundColor: "#eeeeee",
    padding: 15,
    marginBottom: 15,
    height: 200,
    justifyContent: "space-between",
  },
  cardLast: {
    fontSize: 18,
    textAlign: "left",
    width: 310,
    backgroundColor: "#eeeeee",
    padding: 15,
    height: 200,
    alignItems: "center",
    paddingTop: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  totalCost: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  note: {
    fontSize: 10,
    marginTop: 10,
    textAlign: "right",
    fontStyle: "italic",
    color: "#bbb",
  },
  totalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const totalEstimatedCost = 100000;

const Page3 = () => {
  const scheduleData = [
    {
      title: "Design and Development",
      percentage: 1,
      price: 0.01 * totalEstimatedCost,
    },
    {
      title: "Civil Construction (Upto Plinth Level)",
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction (Upto Terrace Level)",
      percentage: 30,
      price: 0.3 * totalEstimatedCost,
    },
    {
      title: "Civil Construction (Upto Plastering)",
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction (Fixtures Installation)",
      percentage: 15,
      price: 0.15 * totalEstimatedCost,
    },
    {
      title: "Civil Construction (Upto Metal Works)",
      percentage: 10,
      price: 0.1 * totalEstimatedCost,
    },
    { title: "Handover", percentage: 4, price: 0.04 * totalEstimatedCost },
    { title: "Total*", price: totalEstimatedCost },
  ];

  return (
    <Page size="A4" style={styles.page}>
      <View style={{ padding: 20, border: "1.5px dashed #c0c0c0" }}>
        <Text style={styles.header}>Payment Schedule</Text>
        <View style={styles.grid}>
          {scheduleData.map((item, index) => (
            <View
              style={
                index === scheduleData.length - 1
                  ? styles.cardLast
                  : styles.card
              }
              key={index}
            >
              <Text
                style={
                  index === scheduleData.length - 1
                    ? styles.totalTitle
                    : styles.title
                }
              >
                {item.title}
              </Text>
              {item.percentage !== undefined && (
                <Text style={styles.percentage}>{item.percentage}%</Text>
              )}
              <Text
                style={
                  index === scheduleData.length - 1
                    ? styles.totalPrice
                    : styles.price
                }
              >
                <Image src={rupee} style={{ width: 15, height: 15 }} />
                {Number(item.price).toLocaleString("en-IN")}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.note}>
          * Actual cost may vary based on design and material selection.
        </Text>
      </View>
    </Page>
  );
};

export default Page3;

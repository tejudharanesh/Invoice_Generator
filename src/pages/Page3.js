import React from "react";
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  header: {
    fontSize: 24,
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
    width: "30%",
    backgroundColor: "#7c7c7c",
    padding: 15,
    marginBottom: 15,
    minHeight: 150,
    justifyContent: "space-between",
  },
  cardLast: {
    width: "65%",
    backgroundColor: "#7c7c7c",
    padding: 15,
    minHeight: 150,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    textAlign: "center",
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
});
const totalEstimatedCost = 100000;
const Page3 = () => {
  const scheduleData = [
    {
      title: "Design & Development",
      percentage: 1,
      price: 0.01 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Plinth Level)",
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Terrace Level)",
      percentage: 30,
      price: 0.3 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Plastering)",
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Fixtures Installation)",
      percentage: 15,
      price: 0.15 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Metal Works)",
      percentage: 10,
      price: 0.1 * totalEstimatedCost,
    },
    { title: "Handover", percentage: 4, price: 0.04 * totalEstimatedCost },
    { title: "Total", price: totalEstimatedCost },
  ];

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Payment Schedule</Text>
      <View style={styles.grid}>
        {scheduleData.map((item, index) => (
          <View
            style={
              index === scheduleData.length - 1 ? styles.cardLast : styles.card
            }
            key={index}
          >
            <Text style={styles.title}>{item.title}</Text>
            {item.percentage !== undefined && (
              <Text style={styles.percentage}>{item.percentage}%</Text>
            )}
            <Text style={styles.price}>
              ₹ {Number(item.price).toLocaleString("en-IN")}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.note}>
        * Actual cost may vary based on design and material selection.
      </Text>
    </Page>
  );
};

export default Page3;

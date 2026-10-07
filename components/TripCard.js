import { View, Text, StyleSheet, Pressable } from "react-native";

export default function TripCard({ trip }) {
  return (
    <Pressable
      onPress={() => console.log("Trajet sélectionné : " + trip.departure + " → " + trip.arrival)}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
    >            <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.route}>
            {trip.departure} → {trip.arrival}
          </Text>
          <Text style={styles.price}>{trip.price} €</Text>
        </View>

        <Text style={styles.info}>{trip.date} - {trip.time}</Text>
        <Text style={styles.info}>Nombre de places : {trip.seatsAvailable}</Text>
        {trip.seatsAvailable <= 1 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Dernières places</Text>
          </View>
        )}

        <Text style={styles.info}>Conducteur : {trip.driver.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardPressed: {
    opacity: 0.7,
  },


  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  route: {
    fontSize: 18,
    fontWeight: "600",
    color: "#161B33",
    marginTop: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3ED9C4",
  },

  info: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#FF7A59",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
},
badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
},

});

import { useLocalSearchParams, useRouter } from "expo-router";
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { menu } from "../../data/menu";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Normalize category id
  const normalizedId = (id as string)?.toLowerCase();

  // Match category safely
  const filtered = menu.filter((item) =>
    item.category
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .includes(normalizedId),
  );

  const categoryTitle = filtered.length > 0 ? filtered[0].category : "Category";

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ marginBottom: 20 }}
      >
        <Text style={{ fontSize: 16 }}>← Back</Text>
      </TouchableOpacity>

      {/* Category Title */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "800",
          marginBottom: 20,
        }}
      >
        {categoryTitle}
      </Text>

      {/* Dish List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/dish/${item.id}`)}
            style={{
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.dish_name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* If Empty */}
      {filtered.length === 0 && (
        <View style={{ marginTop: 20 }}>
          <Text>No items found in this category.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

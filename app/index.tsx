import { useRouter } from "expo-router";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { menu as menuData } from "../data/menu";

type MenuItem = {
  id: number;
  category: string;
  dish_name: string;
  ingredients?: string[];
  finish?: string[];
  price?: number;
  price_full?: number;
  price_half?: number | null;
  image?: any;
};

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Get unique categories dynamically from menu
  const categories = useMemo(() => {
    const unique = Array.from(new Set(menuData.map((item) => item.category)));
    return unique;
  }, []);

  // Build searchable menu
  const enrichedMenu = useMemo(() => {
    return menuData.map((item: MenuItem) => {
      const initials = item.dish_name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toLowerCase();

      const searchableContent = item.finish
        ? item.finish.join(" ")
        : item.ingredients?.join(" ") || "";

      return {
        ...item,
        search_blob: `
          ${item.dish_name}
          ${item.category}
          ${searchableContent}
          ${initials}
        `.toLowerCase(),
      };
    });
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(enrichedMenu, {
      keys: ["search_blob"],
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
  }, [enrichedMenu]);

  const results =
    query.trim() === "" ? [] : fuse.search(query).map((r) => r.item);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search menu..."
        value={query}
        onChangeText={setQuery}
        style={{
          borderWidth: 1,
          padding: 14,
          borderRadius: 12,
          marginBottom: 20,
          fontSize: 16,
        }}
      />

      {/* SEARCH MODE */}
      {query.trim() !== "" ? (
        <>
          {results.length === 0 && <Text>No results found.</Text>}

          <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/dish/${item.id}`)}
                style={{
                  padding: 15,
                  borderRadius: 12,
                  marginBottom: 12,
                  backgroundColor: "#fff",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {item.dish_name}
                </Text>
                <Text style={{ color: "#666" }}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        /* CATEGORY MODE */
        <>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 15,
            }}
          >
            Categories
          </Text>

          <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push(
                    `/category/${item.toLowerCase().replace(/[^a-z]/g, "")}`,
                  )
                }
                style={{
                  padding: 18,
                  borderRadius: 14,
                  marginBottom: 15,
                  backgroundColor: "#fff",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

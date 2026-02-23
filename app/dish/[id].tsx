import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { bennyBase } from "../../data/benny";
import { menu } from "../../data/menu";
import { MenuItem } from "../../types/menu";

export default function DishDetail() {
  const { id } = useLocalSearchParams();

  const dish: MenuItem | undefined = menu.find(
    (item) => item.id.toString() === id,
  );

  if (!dish) {
    return (
      <SafeAreaView>
        <Text>Dish not found</Text>
      </SafeAreaView>
    );
  }

  const isBenny = dish.finish !== undefined;

  const renderPrice = () => {
    if (dish.price_full !== undefined) {
      if (dish.price_half !== null && dish.price_half !== undefined) {
        return `$${dish.price_full} / $${dish.price_half}`;
      }
      return `$${dish.price_full}`;
    }

    if (dish.price !== undefined) {
      return `$${dish.price}`;
    }

    return "";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* IMAGE */}
        {dish.image && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            <Image
              source={dish.image}
              style={{
                height: 220,
                width: 1000, // force width so it renders on web
                borderRadius: 14,
              }}
              resizeMode="contain"
            />
          </ScrollView>
        )}

        {/* TITLE */}
        <Text
          style={{
            fontSize: 26,
            fontWeight: "800",
            color: "#1E3A34",
          }}
        >
          {dish.dish_name}
        </Text>

        <Text
          style={{
            color: "#777",
            marginBottom: 20,
            fontStyle: "italic",
          }}
        >
          {dish.category}
        </Text>

        {/* CONSTANT BASE */}
        {isBenny && (
          <View
            style={{
              backgroundColor: "#E8F3EF",
              padding: 15,
              borderRadius: 12,
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "#145A4A",
                marginBottom: 6,
              }}
            >
              CONSTANT BASE
            </Text>
            <Text style={{ color: "#1E3A34" }}>
              {bennyBase.ingredients.join(", ")}
            </Text>
          </View>
        )}

        {/* CHANGE / FINISH */}
        <View
          style={{
            backgroundColor: "#FFF4E5",
            padding: 15,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              color: "#B45309",
              marginBottom: 6,
            }}
          >
            CHANGE / FINISH
          </Text>

          {dish.finish ? (
            <Text style={{ color: "#7C2D12" }}>{dish.finish.join(", ")}</Text>
          ) : (
            <Text style={{ color: "#7C2D12" }}>
              {dish.ingredients?.join(", ")}
            </Text>
          )}
        </View>

        {/* PRICE */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "800",
            color: "#111",
          }}
        >
          {renderPrice()}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

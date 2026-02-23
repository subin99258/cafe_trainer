import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { bennyBase } from "../../data/benny";
import { croissantBase } from "../../data/croissant";
import { frenchToastBase } from "../../data/frenchtoast";
import { menu } from "../../data/menu";
import { pancakeBase } from "../../data/pancakes";
import { pieBase } from "../../data/pie";
import { waffleBase } from "../../data/waffles";
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

  const isFrenchToast = dish.category === "French Toast";
  const isBenny = dish.category === "Benny & the Jets";
  const isPancake = dish.category === "Pancakes";
  const isWaffle = dish.category === "Waffles";
  const isCroissant = dish.category === "Croissant";
  const isPie = dish.category === "Pie";

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
          <Image
            source={dish.image}
            style={{
              height: 220,
              width: "100%",
              borderRadius: 14,
              marginBottom: 20,
            }}
            resizeMode="contain"
          />
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
        {isCroissant && (
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
              {croissantBase.ingredients.join(", ")}
            </Text>
          </View>
        )}
        {isPie && (
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
              {pieBase.ingredients.join(", ")}
            </Text>
          </View>
        )}

        {/* CONSTANT BASE — BENNY */}
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

        {/* CONSTANT BASE — FRENCH TOAST */}
        {isFrenchToast && (
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
              {frenchToastBase.ingredients.join(", ")}
            </Text>
          </View>
        )}
        {isPancake && (
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
              {pancakeBase.ingredients.join(", ")}
            </Text>
          </View>
        )}
        {isWaffle && (
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
              {waffleBase.ingredients.join(", ")}
            </Text>
          </View>
        )}

        {/* CHANGE / INGREDIENTS */}
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
            INGREDIENTS
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

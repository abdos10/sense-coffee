import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    id: "sourcing",
    title: "اختيار أجود حبات البن",
    description:
      "نبدأ رحلتنا باختيار أجود حبات البن العربية من أفضل المناطق حول العالم. نحرص على انتقاء الحبوب عالية الجودة التي تمنح قهوتنا نكهتها المميزة.",
    image: {
      src: "/images/journey/sourcing.jpg",
      alt: "اختيار أجود حبات البن",
    },
    order: 1,
  },
  {
    id: "roasting",
    title: "تحميص الحبوب",
    description:
      "نقوم بتحميص حبات البن بدقة عالية باستخدام أحدث التقنيات. يتم التحميص على دفعات صغيرة لضمان وصول كل حبة إلى درجة التحميص المثالية.",
    image: {
      src: "/images/journey/roasting.jpg",
      alt: "تحميص الحبوب",
    },
    order: 2,
  },
  {
    id: "grinding",
    title: "الطحن",
    description:
      "بعد التحميص، تطحن الحبوب في مطاحننا الخاصة بدرجات نعومة مختلفة حسب نوع الخلطة. نقدم خيارات طحن متعددة لتناسب جميع طرق التحضير.",
    image: {
      src: "/images/journey/grinding.jpg",
      alt: "الطحن",
    },
    order: 3,
  },
  {
    id: "packaging",
    title: "التعبئة والتغليف",
    description:
      "تُعبأ القهوة في عبوات محكمة الإغلاق تحافظ على نضارتها ونكهتها لأطول فترة ممكنة. نستخدم مواد تغليف عالية الجودة تحمي القهوة من الرطوبة والضوء.",
    image: {
      src: "/images/journey/packaging.jpg",
      alt: "التعبئة والتغليف",
    },
    order: 4,
  },
  {
    id: "distribution",
    title: "من حلب إلى فنجانك",
    description:
      "نوزع منتجاتنا إلى فروعنا في حلب وإلى محلات المواد الغذائية والمقاهي والمطاعم. نضمن وصول القهوة طازجة إلى عملائنا أينما كانوا.",
    image: {
      src: "/images/journey/distribution.jpg",
      alt: "من حلب إلى فنجانك",
    },
    order: 5,
  },
];

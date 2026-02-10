# Component System Update

## ✅ All Components Refactored

### New Reusable Components in `components/UI.tsx`

#### 1. **GlassCard**
```tsx
<GlassCard className="...">
  {children}
</GlassCard>
```
- Automatic natural glass morphism styling
- Sage green borders
- Warm white background with transparency
- Hover shadow effects

#### 2. **SectionTitle**
```tsx
<SectionTitle 
  title="Your Title" 
  subtitle="Optional subtitle"
  centered={true}
/>
```
- Consistent heading styles
- Natural color palette (deep olive for titles)
- Optional subtitle with muted green text

#### 3. **Badge**
```tsx
<Badge>LABEL TEXT</Badge>
```
- Sage green background with low opacity
- Forest green text
- Uppercase, bold, tracked lettering

#### 4. **ModernInput**
```tsx
<ModernInput 
  placeholder="Enter text..."
  required
/>
```
- Pill-shaped input with natural styling
- Sage green borders
- Warm white background
- Focus states with sage accent

#### 5. **ModernTextarea**
```tsx
<ModernTextarea 
  rows={5}
  placeholder="Enter description..."
/>
```
- Rounded corners
- Natural color scheme
- Sage green borders

#### 6. **PrimaryButton**
```tsx
<PrimaryButton onClick={handleClick}>
  <span>Button Text</span>
  <svg>...</svg>
</PrimaryButton>
```
- Terracotta gradient background (#D4845C → #B86F4D)
- White text
- Hover scale and shadow effects
- Flex layout for icons

#### 7. **SecondaryButton**
```tsx
<SecondaryButton onClick={handleClick}>
  Button Text
</SecondaryButton>
```
- Glass morphism style
- Sage green border
- Forest green text
- Hover scale effect

#### 8. **IconContainer**
```tsx
<IconContainer variant="sage|terracotta|forest">
  <svg>...</svg>
</IconContainer>
```
- Three gradient variants:
  - **sage**: Sage to Forest green
  - **terracotta**: Terracotta gradient
  - **forest**: Forest to Sage green
- White icon color
- Rounded square shape
- Shadow effects

## 📦 Component Usage Across Pages

### Home Page
- ✅ PrimaryButton for main CTA
- ✅ SecondaryButton for secondary CTA
- ✅ IconContainer for feature cards (alternating sage/terracotta)
- ✅ GlassCard for all card layouts
- ✅ Badge for certifications

### Services Page
- ✅ GlassCard for all service cards
- ✅ Badge for service numbers
- ✅ Consistent color styling

### Contact Page
- ✅ ModernInput for form fields
- ✅ ModernTextarea for message field
- ✅ PrimaryButton for submit
- ✅ GlassCard for form container

### About Page
- ✅ IconContainer with all three variants
- ✅ GlassCard for mission/mindset/impact cards
- ✅ SectionTitle for page heading

### Marketplace Page
- ✅ GlassCard for product cards
- ✅ PrimaryButton for purchase CTAs
- ✅ Badge for features

## 🎨 Color System

All components use the natural color palette:

```css
--sage: #8B9D83
--forest: #4A5D4A
--terracotta: #D4845C
--sand: #E8DCC4
--cream: #F5F1E8
--warm-white: #FFFEF9
--primary-text: #2D3319
--secondary-text: #5A6B4A
```

## 🚀 Benefits

1. **Consistency**: All pages use the same component system
2. **Maintainability**: Update styling in one place
3. **Reusability**: Easy to add new pages with existing components
4. **Type Safety**: Full TypeScript support
5. **Performance**: Minimal inline styles, CSS custom properties
6. **Accessibility**: Proper semantic HTML and focus states

## 📝 Import Pattern

```tsx
import { 
  GlassCard, 
  SectionTitle, 
  Badge, 
  PrimaryButton, 
  SecondaryButton,
  IconContainer,
  ModernInput,
  ModernTextarea 
} from '../components/UI';
```

---

**Result**: A fully componentized design system with natural earth tones, consistent styling, and reusable components across all pages.

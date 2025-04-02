import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { Text } from "@react-three/drei";

const CodeText = ({
    position,
    text,
    speed = 1,
}: {
    position: [number, number, number];
    text: string;
    speed?: number;
}) => {
    const ref = useRef<Group>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.position.y -= 0.01 * speed;
            if (ref.current.position.y < -20) {
                ref.current.position.y = 20;
            }
        }
    });

    return (
        <group ref={ref} position={new Vector3(...position)}>
            <Text
                color="#00ff88"
                fontSize={0.15}
                maxWidth={5}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="left"
                font="https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7MOzlojwUKQ.woff"
                material-transparent={true}
                material-opacity={0.3}
            >
                {text}
            </Text>
        </group>
    );
};

const codeSnippets = [
    // React Hooks
    "const [state, setState] = useState(null);",
    "useEffect(() => { getData() }, []);",
    "const value = useContext(ThemeContext);",
    "const memoValue = useMemo(() => compute(), []);",

    // Modern JavaScript
    "const { data, loading } = await api.fetch();",
    "const result = array?.filter(Boolean)?.map(x => x * 2);",
    "export const sum = (a, b) => a + b;",

    // React Components
    "function App() {",
    "  return (",
    "    <div className='app'>",
    "      <Header />",
    "      <Main />",
    "    </div>",
    "  )",
    "}",

    // Three.js Code
    "const scene = new THREE.Scene();",
    "const camera = new THREE.PerspectiveCamera();",
    "renderer.setSize(window.innerWidth);",

    // Terminal Commands
    "npm install @react-three/fiber",
    "git commit -m 'feat: add 3D scene'",
    "docker-compose up -d",

    // TypeScript
    "interface User { id: string; name: string; }",
    "type Props = { children: ReactNode; };",
    "const getData = async (): Promise<Data> => {",

    // CSS & Styling
    "@keyframes fadeIn { from {opacity: 0} }",
    "const Button = styled.button`",
    "  background: linear-gradient(45deg);",

    // Testing
    "describe('Component', () => {",
    "test('should render', () => {",
    "expect(result).toBeTruthy();",

    // Backend Code
    "app.use(express.json());",
    "mongoose.connect(process.env.DB_URL);",
    "router.get('/api/users', getUsers);",

    // GraphQL
    "type Query { users: [User!]! }",
    "const resolvers = { Query: { ... } }",

    // Configuration
    "module.exports = { entry: './src/index.js' }",
    "NEXT_PUBLIC_API_URL=https://api.dev",

    // Error Handling
    "try { await saveData() }",
    "catch (error) { console.error(error) }",

    // Utils & Helpers
    "const debounce = (fn, delay) => {",
    "const formatDate = (date) => new Date()",

    // Modern Features
    "const module = await import('./module');",
    "for await (const item of items) {",
    "const { data } = await response.json();",
];

const Scene = () => {
    return (
        <group>
            {codeSnippets.map((text, index) => (
                <CodeText
                    key={index}
                    text={text}
                    position={[
                        Math.random() * 14 - 7,
                        Math.random() * 40 - 20,
                        Math.random() * 5 - 12,
                    ]}
                    speed={Math.random() * 0.3 + 0.2}
                />
            ))}
        </group>
    );
};

export default Scene;

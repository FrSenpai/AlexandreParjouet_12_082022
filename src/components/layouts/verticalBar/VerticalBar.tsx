import "./VerticalBar.css";
import item_0 from "../../../assets/img/navigation/item_0.png";
import item_1 from "../../../assets/img/navigation/item_1.png";
import item_2 from "../../../assets/img/navigation/item_2.png";
import item_3 from "../../../assets/img/navigation/item_3.png";
const verticalBarItems = [{ icon: item_0 },{ icon: item_1 },{ icon: item_2 },{ icon: item_3 }]
export function VerticalBar() {
    return (
        <section className="ctnVerticalBar">
            <ul>
                {verticalBarItems.map((item: any, index: number) => {
                return (
                    <li key={"verticalBarItem" + index} className="vBItem">
                        <img src={item.icon} alt={"navigation item "+index} />
                    </li>
                )
            })}
            </ul>
            <p className="copyright">Copyright, SportSee 2020</p>
        </section>
    )
}
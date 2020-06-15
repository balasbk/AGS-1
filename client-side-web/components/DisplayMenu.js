class DisplayMenu extends React.Component {
    state = {
        
    }

    render() {
        const menuItems = this.props.menu.map((product, key) => 
            <li key={product.id}>{product.name}</li>
        );
        return(
            <div>
                <ul>
                    {menuItems}
                </ul>
            </div>
        );
    }
}

export default DisplayMenu;